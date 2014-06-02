// Generated on 2014-02-09 using generator-ember 0.8.1
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    src: 'src',
    dev: 'dev',
    prod: 'prod'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      compass: {
        files: '<%= yeoman.src %>/sass/*.scss',
        tasks: ['compass:src']
      },
      emblem: {
        files: '<%= yeoman.src %>/templates/{,*/}*.emblem',
        tasks: ['emblem:dev']
      },
      haml:{
        files: '<%= yeoman.src %>/**/*.haml',
        tasks: ['haml:src', 'replace:src']
      },
      neuter: {
        files: ['<%= yeoman.src %>/scripts/**/*.js'],
        tasks: ['neuter:src', 'copy:build']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.dev %>/js/**/*.js',
          '<%= yeoman.dev %>/*.html',
          '{<%= yeoman.dev %>,<%= yeoman.src %>}/sass/{,*/}*.scss',
          '<%= yeoman.dev %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, 'dev'),
              mountFolder(connect, '<%= yeoman.src %>')
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, 'dev'),
              mountFolder(connect, 'test')
            ];
          }
        }
      },
      dev: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '<%= yeoman.dev %>')
            ];
          }
        }
      }
    },
    clean: {
      dev: {
        files: [{
          dot: true,
          src: [
            'dev',
            '<%= yeoman.dev %>/*',
            '!<%= yeoman.dev %>/.git*'
          ]
        }]
      },
      server: 'dev'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/scripts/{,*/}*.js',
        '!<%= yeoman.src %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dev: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dev: {}
    },*/
    rev: {
      dev: {
        files: {
          src: [
            '<%= yeoman.dev %>/scripts/{,*/}*.js',
            '<%= yeoman.dev %>/styles/{,*/}*.css',
            '<%= yeoman.dev %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dev %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: 'dev/index.html',
      options: {
        dest: '<%= yeoman.dev %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dev %>/{,*/}*.html'],
      css: ['<%= yeoman.dev %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dev %>']
      }
    },
    imagemin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dev %>/images'
        }]
      }
    },
    svgmin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dev %>/images'
        }]
      }
    },
    replace: {
      src: {
        options: {
          variables: {
            app: 'js/app.js',
            ember: 'js/libs/ember/ember.js',
            ember_data: 'js/libs/ember-data/ember-data.js',
            ember_simple_auth: 'js/libs/ember-simple-auth/ember-simple-auth.js',
            moment: 'js/libs/momentjs/moment.js',
            handlebars: 'js/libs/handlebars/handlebars.runtime.js',
            jquery: 'js/libs/jquery/jquery.js',
            templates: 'js/templates/templates.js',
            frontend: 'http://127.0.0.1/dev',
            server_endpoint: 'http://localhost:3000'
          }
        },
        files: [
          {src: '<%= yeoman.dev %>/index.html', dest: '<%= yeoman.dev %>/index.html'},
          {src: '<%= yeoman.dev %>/js/app.js', dest: '<%= yeoman.dev %>/js/app.js'},
          {src: '<%= yeoman.dev %>/oauth/twitter/config.php', dest: '<%= yeoman.dev %>/oauth/twitter/config.php'}
        ]
      },
      build: {
        options: {
          variables: {
            app: 'js/app.js',
            ember: 'js/libs/ember/ember.js',
            ember_data: 'js/libs/ember-data/ember-data.js',
            ember_simple_auth: 'js/libs/ember-simple-auth/ember-simple-auth.js',
            moment: 'js/libs/momentjs/moment.js',
            handlebars: 'js/libs/handlebars/handlebars.runtime.js',
            jquery: 'js/libs/jquery/jquery.js',
            templates: 'js/templates/templates.js',
            frontend: 'http://api.peopleandcode.com',
            server_endpoint: 'http://opengov.webnotwar.ca'
          }
        },
        files: [
          {src: '<%= yeoman.dev %>/index.html', dest: '<%= yeoman.dev %>/index.html'},
          {src: '<%= yeoman.dev %>/js/app.js', dest: '<%= yeoman.dev %>/js/app.js'},
          {src: '<%= yeoman.dev %>/oauth/twitter/config.php', dest: '<%= yeoman.dev %>/oauth/twitter/config.php'}
        ]
      },
      dev: {
        options: {
          variables: {
          ember: 'js/libs/ember/ember.prod.js',
          ember_data: 'js/libs/ember-data/ember-data.prod.js'
          }
        },
        files: [
          {src: '<%= yeoman.tmp %>/index.html', dest: '<%= yeoman.prod %>/index.html'}
        ]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      src: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/bower_components/',
          src: [
            'ember/ember.js', 
            'ember-data/ember-data.js', 
            'jquery/jquery.js', 
            'handlebars/handlebars.runtime.js',
            'momentjs/moment.js',
            'ember-simple-auth/ember-simple-auth.js'
          ],
          dest: '<%= yeoman.dev %>/js/libs/'
        }]
      },
      oauth: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/oauth/',
          src: [
            'twitter/{,*/}*.*'
          ],
          dest: '<%= yeoman.dev %>/oauth/'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/bower_components/',
          src: [
            'ember/ember.js', 
            'ember-data/ember-data.js', 
            'jquery/jquery.js', 
            'handlebars/handlebars.runtime.js',
            'momentjs/moment.js',
            'ember-simple-auth/ember-simple-auth.js'
          ],
          dest: '<%= yeoman.dev %>/js/libs/'
        }]
      }
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.src %>/sass',
        cssDir: '<%= yeoman.dev %>/css',
        relativeAssets: false,
        importPath: '<%= yeoman.src %>/sass'
      },
      src: {
        sassDir: '<%= yeoman.src %>/sass',
        cssDir: '<%= yeoman.dev %>/css'
      }
    },
    concurrent: {
      server: [
        'emblem',
      ],
      test: [
        'emblem',
      ],
      dev: [
        'emblem',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    emblem: {
      dev: {
        files: {
          '<%= yeoman.dev %>/js/templates/templates.js':'<%= yeoman.src %>/templates/{,*/}/*.emblem'
        },
        options: {
          root: '<%= yeoman.src %>/templates/',
          dependencies: {
            jquery:     '<%= yeoman.src %>/bower_components/jquery/jquery.js',
            ember:      '<%= yeoman.src %>/bower_components/ember/ember.js',
            emblem:     '<%= yeoman.src %>/bower_components/emblem.js/emblem.js',
            handlebars: '<%= yeoman.src %>/bower_components/handlebars/handlebars.js'
          }
        }
      }
    },
    haml: {
      src: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: '<%= yeoman.src %>/',
            src: '{,*/}*.haml',
            dest: '<%= yeoman.dev %>/',   // Destination path prefix.
            ext: '.html'   // Dest filepaths will have this extension.
          }
        ]
      }
    },
    hamlbars: {
      src: {
        files: [
          {
            expand: true, 
            cwd: '<%= yeoman.src %>/templates/', 
            src: '**/*.js.hbs.hamlbars', 
            dest: '<%= yeoman.src %>/templates/', 
            ext: '.hbs'
          }
        ]
      }
    },
    neuter: {
      src: {
        options: {
          filepathTransform: function (filepath) {
            return yeomanConfig.src + '/' + filepath;
          }
        },
        src: '<%= yeoman.src %>/scripts/app.js',
        dest: '<%= yeoman.dev %>/js/app.js'
      }
    }
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dev') {
      return grunt.task.run(['build', 'open', 'connect:dev:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'haml:src',
      'copy:src',
      'copy:oauth',
      'compass:src',
      'concurrent:server',
      'neuter:src',
      'replace:src',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'replace:src',
    'concurrent:test',
    'connect:test',
    'neuter:src',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:server',
    'haml:src',
    'copy:src',
    'copy:oauth',
    'compass:src',
    'concurrent:server',
    'neuter:src',
    'replace:build',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
