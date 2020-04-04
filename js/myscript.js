function myFunction() {
    let logo = prompt("Please insert corporate URl logo below");
    document.getElementById("companyLogo").innerHTML=`<img src="${logo}" width="250px">`;
}