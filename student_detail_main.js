let addUser =false;
let deleteUser = false;
let searchUser= false;
let editUser=false;

function search()
{
   addUser = false;
   deleteUser = false;
   searchUser=true;
   editUser=false;
   const box = document.querySelector('#myInput');
   box.addEventListener('keyup', function()
    {
      let value = $(this).val().toLowerCase();
      $("#tableid tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
}
function hide()
{
   addUser = false;
   deleteUser = true;
   searchUser=false;
   editUser=false;
}
function insert()
{
    addUser = true;
    deleteUser = false;
    searchUser= false;
    editUser= false;
}
function edit()
{
  addUser = false;
  deleteUser = false;
  searchUser= false;
  editUser= true;
$("td").dblclick(function () 
{ 
  let OriginalContent = $(this).text();
   $(this).addClass("cellEditing");
   $(this).html("<input type='text' value='" /*+ OriginalContent*/ + "' />"); 
   $(this).children().first().focus(); 
   $(this).children().first().keypress(function (e)
    { 
      if (e.which == 13) //unicode for enter button=13 and event.which returns the value of key pressed
       { 
        let newContent = $(this).val(); 
        $(this).parent().text(newContent); 
        $(this).parent().removeClass("cellEditing");
       } 
      });
       $(this).children().first().blur(function()
       {
          $(this).parent().text(OriginalContent);
           $(this).parent().removeClass("cellEditing");
         }); 
        }); 
 }
 function submitUserAction() 
 {
    if(addUser)
     {
             const row=document.createElement('tr');
             let col1=document.createElement('td');
             let col2=document.createElement('td');
             let col3=document.createElement('td');
             const button1 = document.createElement('input');
             button1.setAttribute('type', 'checkbox');
             row.appendChild(button1);
             row.appendChild(col1);
             row.appendChild(col2);
             row.appendChild(col3); 
             col1.innerHTML=document.getElementById('name').value;
             col2.innerHTML=document.getElementById('roll').value;
             col3.innerHTML=document.getElementById('year').value;
             const table=document.getElementById("tableid");
             table.appendChild(row);
        
    }
    if(deleteUser)
    {
        $("#tableid input:checkbox:checked").closest('tr').remove();
    }
    if(searchUser)
    {
      $("#submit_button button:disabled");
    }
    if(editUser)
    {
      $("#submit_button button:disabled");
    }
 }
