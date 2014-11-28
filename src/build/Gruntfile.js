module.exports = function (grunt) {
  grunt.initConfig({
    zetzer: {
      main: {
        options: {
          templates: '../templates'
        },
        files: [
        {
          expand: true,
          cwd: '../pages/',
          src: '**/*.dot.html',
          dest: '../../',
          ext: '.html'
        }
        ]
      }
    },
    watch: {
      all: {
        files: '../**/*',
        tasks: ['zetzer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-zetzer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'zetzer');
};
