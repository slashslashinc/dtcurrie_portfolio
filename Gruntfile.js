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
        concat: {
            js: {
                src: ['public/js/raw/script.js', 'public/js/modernizr.min.js'],
                dest: 'public/js/<%= pkg.name %>.js'
            },
            css: {
                src: ['public/css/raw/animations.css', 'public/css/raw/fonts.css', 'public/css/raw/style.css'],
                dest: 'public/css/<%= pkg.name %>-theme.css'
            },
            bootstrap: {
                src: [
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
                dest: 'public/js/bootstrap.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            },
            bootstrap: {
                files: {
                    'public/js/bootstrap.min.js': ['<%= concat.bootstrap.dest %>']
                }
            }
        },
        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'bootstrap.css.map',
                    sourceMapFilename: 'public/css/bootstrap.css.map'
                },
                src: 'libs/bootstrap/less/bootstrap.less',
                dest: 'public/css/bootstrap.css'
            },
            compileTheme: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>-theme.css.map',
                    sourceMapFilename: 'public/css/<%= pkg.name %>-theme.css.map'
                },
                src: 'libs/bootstrap/less/theme.less',
                dest: 'public/css/<%= pkg.name %>.css'
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false
            },
            minifyBootstrap: {
                src: 'public/css/bootstrap.css',
                dest: 'public/css/bootstrap.min.css'
            },
            minifyStyle: {
                src: 'public/css/<%= pkg.name %>-theme.css',
                dest: 'public/css/<%= pkg.name %>-theme.min.css'
            },
            minifyTheme: {
                src: 'public/css/<%= pkg.name %>.css',
                dest: 'public/css/<%= pkg.name %>.min.css'
            }
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
            fontAwesomeCss: {
                expand: true,
                cwd: 'libs/font-awesome/css',
                src: ['font-awesome.min.css','font-awesome.css.map'],
                dest: 'public/css'
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

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'cssmin', 'copy']);

};