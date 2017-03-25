module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      full: {
        src: ['dist/']
      },
      build: {
        src: ['.build/']
      }
    },
    concat: {
      js: {
        src: ['site/js/*'],
        dest: 'dist/js/scripts.js'
      },
      css: {
        src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'site/css/*'],
        dest: 'dist/css/styles.css'
      }
    },
    uglify: {
      target: {
        src: 'dist/js/scripts.js',
        dest: 'dist/js/scripts.js'
      }
    },
    cssmin: {
      target: {
        src: 'dist/css/styles.css',
        dest: 'dist/css/styles.css'
      }
    },
    eslint: {
      options: {
        configFile: 'eslint-config.js'
      },
      target: ['dist/js/scripts.js']
    },
    copy: {
      js: {
        files: [
          {expand: true, cwd: 'dist/', src: '**/*.js', dest: '.build/'}
        ]
      },
      css: {
        files: [
          {expand: true, cwd: 'dist/', src: '**/*.css', dest: '.build/'}
        ]
      },
      html: {
        files: [
          {expand: true, cwd: 'site/', src: 'index.html', dest: '.build/'}
        ]
      }
    },
    hashres: {
      options: {
        fileNameFormat: '${name}.${hash}.${ext}',
        renameFiles: true
      },
      css: {
        src: ['.build/css/styles.css'],
        dest: '.build/index.html'
      },
      js: {
        src: ['.build/js/scripts.js'],
        dest: '.build/index.html'
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080,
          base: '.build',
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'site/**/*.js',
        tasks: ['build-js']
      },
      css: {
        files: 'site/**/*.css',
        tasks: ['default']
      },
      html: {
        files: 'site/**/*.html',
        tasks: ['build-html']
      },
      build: {
        files: '.build/**/*.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin', 'eslint', 'copy', 'hashres']);
  grunt.registerTask('build-css', ['clean:build', 'concat:css', 'cssmin', 'copy', 'hashres']);
  grunt.registerTask('build-js', ['clean:build', 'concat:js', 'uglify', 'eslint', 'copy', 'hashres']);
  grunt.registerTask('build-html', ['clean:build', 'copy', 'hashres']);
  grunt.registerTask('serve', ['connect', 'watch']);

};