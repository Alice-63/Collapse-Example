// const collapse= document.getElementById("collapse");

// let offen= true;


function col(button)
{
    let parent=button.parentElement;
    let icon=button.children[0];

   if(parent.offsetHeight==64)
   {
    icon.style.transform="rotate(180deg)";
    parent.style.height="auto"
   }
   else
   {
    icon.style.transform="rotate(0deg)"
    parent.style.height="64px"
   }
}