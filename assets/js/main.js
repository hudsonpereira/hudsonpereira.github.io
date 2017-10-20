var badgeClasses = [
  'badge-primary',
  'badge-success',
  'badge-info',
  'badge-secondary',
  'badge-danger',
  'badge-warning',
  // 'badge-light',
  'badge-dark'
];

$(function () {
  $('.badge').each(function (index, badge) {
    $(badge).addClass(getRandomBadgeClass());
  });
});

function getRandomBadgeClass() {
  return badgeClasses[
    Math.floor(Math.random() * badgeClasses.length)
  ];
}