//Function to charge the nav 
async function loadNav(){
    try {
        const response = await fetch('/components/navbar/nav.html');
        const navHTML = await response.text();
        document.getElementById("nav-placeholder").innerHTML = navHTML;
    } catch (error) {
        console.error('error loading navigation:',error);
    }
}
loadNav()