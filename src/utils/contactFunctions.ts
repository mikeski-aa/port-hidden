function handleGithubClick() {
  window.open("https://github.com/", "__blank");
}

function handleLinkedInClick() {
  window.open("https://www.linkedin.com", "__blank");
}

// this will require mobile testing.
// ideally if viewed from mobile I want this to directly lead to mobile page
// temp alternative may be to open a modal instead with email link?
function handleEmailClick() {
  window.open("mailto:fakeEmailPlaceholder@gmail.com");
}

export { handleGithubClick, handleEmailClick, handleLinkedInClick };
