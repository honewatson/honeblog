var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();
var m = require('../../models');

lab.experiment('Blog', function() {
    var bilbo = {
        active: true,
        title: "Bilbo",
        sub_title: "Sub Bilbo",
        slug: "bilbo"
    };

    lab.test('Can create blog', function(done) {

        m.blog.create(bilbo).then(function(created) {


            Code.expect(created.dataValues.blog_id).to.exist();
            m.blog_detail.create({
                blog_id: created.dataValues.blog_id,
                content: "some content"
            }).then(function(bdCreated) {
                Code.expect(bdCreated.dataValues.blog_id).to.exist();
                done();
            });

        });

    });

    lab.test('Cannot create blog with the same slug', function(done) {


        m.blog.create(bilbo).then(function(created) {}).catch(function(e) {


            Code.expect(e.errors[0].message).to.equal('blog_slug must be unique');
            done();
        });

    });


    lab.test('Can delete blog', function(done) {
        m.blog.destroy({
            where: {
                slug: 'bilbo'
            }
        }).then(function(destroyed) {

            Code.expect(destroyed).to.equal(1);
            m.blog_detail.destroy({
                where: {
                    content: 'some content'
                }
            });

            done();
        });

    });




});
