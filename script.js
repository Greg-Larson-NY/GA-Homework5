
// Define function name whatever you want but something that makes sense in this case "why slack" + "show" to show the menu when hovered.
//other menu items are hidden or removed when not hovered over
function whySlackShow(){
    document.getElementById('menu-1').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
//second menu that has a dropdown state
  function SolutionsShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
//third menu
  function ResourcesShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.add('show');
  }
  
  //hides all menus when mouse leaves nav menu entirely
  function HideMenus() {
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // This actually waits for a "hover" to trigger the menus to drop down
  document.getElementById('menu-1-button').addEventListener('mouseover', whySlackShow);
  document.getElementById('menu-2-button').addEventListener('mouseover', SolutionsShow);
  document.getElementById('menu-3-button').addEventListener('mouseover', ResourcesShow);
  
  //This removesthem as mouse moves along
  document.getElementById('menu-1').addEventListener('mouseleave', HideMenus);
  document.getElementById('menu-2').addEventListener('mouseleave', HideMenus);
  document.getElementById('menu-3').addEventListener('mouseleave', HideMenus);
  
  
 //Trigger "click" event that happens when hamburger is clicked at defined media size. Shows Your Workspaces
  document.getElementById('menu-trigger').addEventListener('click', showYourWorkspaces);
  document.getElementById('menu-close').addEventListener('click', hideYourWorkspaces);
  //slide animation
  function showYourWorkspaces() {
    document.getElementById('side-menu').classList.add('show-menu');
  }
  //closes page
  function hideYourWorkspaces() {
    document.getElementById('side-menu').classList.remove('show-menu');
  }
  
  