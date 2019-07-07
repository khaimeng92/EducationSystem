process.env.NODE_ENV = "test"

import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
const should = chai.should();

chai.use(chaiHttp)

describe('/POST register', () => {
    it('it sould insert the teacher, students and teacherStudents record. Duplicate data will be ignore!', (done) => {
        const register = {
            "teacher": "teacherDarren@gmail.com",
            "students":[
                "student01@gmail.com",
                "student03@gmail.com"
            ]
        };

        chai.request(app)
        .post('/api/register')
        .send(register)
        .end((err, res) => {
            res.should.have.status(204);
            done();
        });
    });
});

describe('/GET commonstudents', () => {
    it('it should get all students resgitered under the given teachers!', (done) => {
        chai.request(app)
        .get('/api/commonstudents?teacher=teacherken@gmail.com&teacher=teacherDarren@gmail.com')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/POST suspend', () => {
    it('it sould update student.suspended => 1!', (done) => {
        const suspend = {
            "student" : "student03@gmail.com"
          };

        chai.request(app)
        .post('/api/suspend')
        .send(suspend)
        .end((err, res) => {
            res.should.have.status(204);
            done();
        });
    });
});

describe('/POST retrievefornotifications', () => {
    it('it sould update student.suspended => 1!', (done) => {
        const retrievefornotifications = {
            "teacher":  "teacherken@gmail.com",
            "notification": "Hello students! @student22@gmail.com @student12@gmail.com"
        };

        chai.request(app)
        .post('/api/retrievefornotifications')
        .send(retrievefornotifications)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});