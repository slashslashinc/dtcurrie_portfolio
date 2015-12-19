/*
 Gruntfile.js
 Devin T. Currie
 */

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var fs = require('fs');
    var path = require('path');
    var configBridge = grunt.file.readJSON('./libs/bootstrap/grunt/configBridge.json', {encoding: 'utf8'});

    Object.keys(configBridge.paths).forEach(function (key) {
        configBridge.paths[key].forEach(function (val, i, arr) {
            arr[i] = path.join('./libs/bootstrap/docs/assets', val);
        });
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compileCore: {
                options: {
                    strictMath: true
                },
                src: 'libs/bootstrap/less/bootstrap.less',
                dest: 'public/css/raw/bootstrap.css'
            },
            compileTheme: {
                options: {
                    strictMath: true
                },
                src: 'libs/bootstrap/less/theme.less',
                dest: 'public/css/raw/<%= pkg.name %>-theme.css'
            }
        },
        concat: {
            js: {
                src: [
                    'public/js/raw/*.js',
                    'libs/bootstrap/js/transition.js',
                    'libs/bootstrap/js/alert.js',
                    'libs/bootstrap/js/button.js',
                    'libs/bootstrap/js/carousel.js',
                    'libs/bootstrap/js/collapse.js',
                    'libs/bootstrap/js/dropdown.js',
                    'libs/bootstrap/js/modal.js',
                    'libs/bootstrap/js/tooltip.js',
                    'libs/bootstrap/js/popover.js',
                    'libs/bootstrap/js/scrollspy.js',
                    'libs/bootstrap/js/tab.js',
                    'libs/bootstrap/js/affix.js'
                ],
                dest: 'public/js/<%= pkg.name %>.js'
            },
            css: {
                src: ['public/css/raw/*.css', 'libs/font-awesome/css/font-awesome.min.css'],
                dest: 'public/css/<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: true
            },
            dist: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false,
                sourceMap: true
            },
            minifyCss: {
                src: 'public/css/<%= pkg.name %>.css',
                dest: 'public/css/<%= pkg.name %>.min.css'
            }
        },
        copy: {
            bootstrapFonts: {
                expand: true,
                cwd: 'libs/bootstrap/fonts/',
                src: ['**'],
                dest: 'public/fonts'
            },
            fontAwesomeFonts: {
                expand: true,
                cwd: 'libs/font-awesome/fonts/',
                src: ['**'],
                dest: 'public/fonts'
            },
            angularJs: {
                expand: true,
                cwd: 'libs/angular',
                src: ['angular.min.js', 'angular.min.js.map'],
                dest: 'public/js'
            },
            angularUiRouterJs: {
                expand: true,
                cwd: 'libs/angular-ui-router/release',
                src: 'angular-ui-router.min.js',
                dest: 'public/js'
            },
            jquery: {
                expand: true,
                cwd: 'libs/jquery/dist/',
                src: ['jquery.min.js', 'jquery.min.map'],
                dest: 'public/js'
            }
        },
        clean: {
            js: ["public/js/*.js", "!public/js/*.min.js"],
            css: ["public/css/*.css", "!public/css/*.min.css"]
        },
        jshint: {
            files: ['Gruntfile.js', 'public/js/app.js', 'public/js/script.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'cssmin', 'copy', 'clean']);
};