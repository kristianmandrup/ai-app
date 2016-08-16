const programs = [ 
  // 'bundle', 
  // 'unbundle',
  'create',  
  'install', 
  'uninstall'
];

programs.map(prog => {
  require(`./${prog}`)
});
