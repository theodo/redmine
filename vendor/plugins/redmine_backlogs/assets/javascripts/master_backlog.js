// Initialize the backlogs after DOM is loaded
$(function() {
  // Initialize each backlog
  $('.backlog').each(function(index){
    backlog = RB.Factory.initialize(RB.Backlog, this); // 'this' refers to an element with class="backlog"
  });
  // $("#project_info").bind('click', function(){ $("#velocity").dialog({ modal: true, title: "Project Info"}); });
  RB.BacklogsUpdater.start();
});