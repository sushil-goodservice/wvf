module.exports = function (grunt) {

    grunt.initConfig({
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'css/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'watch']);

};