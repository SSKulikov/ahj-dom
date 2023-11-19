import './css/style.css';

import './js/app';

// TODO: write your code in app.js
function noLocalBranchConflict(branch) {
    return expectOutputEmpty(
      'git branch --list ' + branch,
      'local branch with name already exists'
    );
  }