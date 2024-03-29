import db from '../../db/models';
import ResponseFormat from '../common/errorHandler';

class AdminController {
	/** 
	 * 1 - register teachers & students 
	 */
	async register(req, res) {
		let transaction;

		try {
			transaction = await db.sequelize.transaction();
			let temail = req.body.teacher;
			let semail = req.body.students;
			let studentLists = [];

			// formatting for bulkCreate
			semail.map((item, i) => {
				studentLists.push({ semail: item, suspended: false });
			})

			// insert teacher
			await db.Teachers.create({ temail: temail }, { ignoreDuplicates: true, transaction });
			// insert students
			await db.Students.bulkCreate( studentLists, { ignoreDuplicates: true, transaction });
			// register
			await db.TeacherStudents.sequelize.query('INSERT IGNORE INTO TeacherStudents (temail, semail) SELECT temail,semail FROM Teachers A INNER JOIN Students B on A.temail=:temail and B.semail in (:semail) and B.suspended=0', { replacements: { temail: temail, semail: semail }, transaction });
			// commit
			await transaction.commit();
			res.status(204).send();

		} catch(err) {
			// rollback
			await transaction.rollback();
			return res.status(500).send(ResponseFormat.error(
				"Error registering teacher and students, please check the inputs!"
			));
		}
	}

	/**
	 * 2 - retrieves a common list of students
	 */
	async commonstudents(req, res) {

		try {
			const Op = db.Sequelize.Op;
			let teachers = req.query.teacher;
			let length = (typeof(teachers) === 'string') ? 1 : teachers.length;
			let students = [];

			let getStudentList = await db.TeacherStudents.findAll({ attributes:['semail'], where: { temail: { [Op.in] : [teachers]} }, group:'semail', having: db.Sequelize.literal(`count(distinct temail) = ${length}`) });

			// format output
			getStudentList.map((item, i) => {
				students.push(item.semail);
			})

			res.status(200).send({"students": students});

		} catch(err) {		
			console.log(err.length)
			return res.status(500).send(ResponseFormat.error(
				"Error retrieving common students list, please check the inputs!"
			));
		}
	}

	/**  
	 * 3 - suspends a specified student
	 */
	async suspend(req, res) {
		let transaction;

		try {
			transaction = await db.sequelize.transaction();
			let student = req.body.student;
			// update student
			let updateStudent = await db.Students.update({suspended: true}, {where : {semail: student}, transaction});
			// delete registered 
			if(updateStudent > 0) {
				await db.TeacherStudents.destroy({where : {semail: student}, transaction});
			} 

			// commit
			await transaction.commit();
			res.status(204).send();

		} catch(err) {
			// rollback
			await transaction.rollback();
			return res.status(500).send(ResponseFormat.error(
				"Error on student suspension, please check the inputs!"
			));
		}	
	}

	/**
	 * 4 - retrieve receipients for notifications.
	 */
	async retrievefornotifications(req, res) {
		try {
			// @example@gmail.com
			const regexr = /@\S+@\S+/g;
			let teacher = req.body.teacher;
			let mentioned = req.body.notification.match(regexr);
			let studentLists = [''];
			let recipients = [];

			// remove @ 
			if(mentioned) 
			mentioned.map((item, i) => {
				studentLists.push(item.substring(1));
			})
		
			let getNotifyLists = await db.TeacherStudents.sequelize.query('(SELECT TeacherStudents.semail FROM TeacherStudents WHERE temail = :temail) UNION (SELECT Students.semail FROM Students WHERE semail IN (:students) AND suspended=0)', { replacements: { temail: teacher, students: studentLists }});

			// format output
			getNotifyLists[0].map((item, i) => {
				recipients.push(item.semail);
			})

			res.status(200).send({ "recipients" : recipients });

		} catch(err) {
			return res.status(500).send(ResponseFormat.error(
				"Error retrieving recipients list, please check the inputs!"
			));
		}
	}
}
const adminController = new AdminController();
export default adminController;