let users= function(id,name,username,email,phone,website,copanyname,street,city,zipcode)
{
    this.id=id;
    this.name=name;
    this.username=username;
    this.email=email;
    this.phone=phone;
    this.website=website;
    this.copanyname=copanyname;
    this.address={street:street,city:city,zipcode:zipcode};

}


let control = function()
{
    this.register = new Map();

    this.adduser=function(nuevo)
    {
      this.register.set(nuevo.id, nuevo);
      console.log(this.register.get(nuevo.id));
      return true;
    }
    this.FillSelect=function()
    {
        this.register.forEach(Element => {

            let Us=document.createElement("option");
            Us.value=Element.id;
            Us.text=Element.name;
            let select=document.getElementById("userselect");
            select.appendChild(Us);
            console.log(Us);
            return true;
        });
    }

    this.ShowSelect=function()
    {
        let SelectShow= document.getElementById("userselect");
        let s= SelectShow.options[SelectShow.selectedIndex].value; 
        this.register.forEach(Element=>{
            if(s==="")
            {
               document.getElementById("result").innerHTML="";
               return false;
            }
            else if(s===Element.id)
            {
                document.getElementById("result").innerHTML="";
                result.addinfo(Element);
                return true;
            }


        });
    }

    this.deleteuser=function(id)
    {

         let del = this.register.delete(id);
         if(del==true)
         {
            console.log(this.register);
            return true;
         }
         else
         {
            return false;
         }

    }

    this.searchuser=function(id)
    {
        let bus = this.register.has(id);
         if(bus==true)
         {
            console.log(this.register.get(id));
            return true;
         }
         else
         {
            return false;
         }
    }

    this.allusers=function()
    {
        document.getElementById("resultAll").innerHTML="";

        this.register.forEach(element => {
            let users=true;
            if(users==true)
            {
                result.addinfoAllusers(element);
                return true;
            }
        });
    }

    edit=function()
    {
        let SelectShow= document.getElementById("userselect");
        let s= SelectShow.options[SelectShow.selectedIndex].value; 
        this.register.forEach(Element=>
        {
            if(s===Element.id)
            {
                document.getElementById("id").value=Element.id;
                document.getElementById("name").value=Element.name;
                document.getElementById("username").value=Element.username;
                document.getElementById("email").value=Element.email;
                document.getElementById("phone").value=Element.phone;
                document.getElementById("website").value=Element.website;
                document.getElementById("companyname").value=Element.companyname;
                document.getElementById("street").value=Element.street;
                document.getElementById("city").value=Element.city;
                document.getElementById("zipcode").value=Element.zipcode;
                return true;
            }
            else
            {
                return false;
            }
        })
    }

    validate=function()
    {
        registration.edit();
        return true;
    }
    
}



let showinformation = function()
{

    this.addinfo=function(nuevo)
    {
        const list= document.getElementById("result");
        const user= document.createElement("div");
        user.innerHTML=`
                        <div class ='estilo1' id='cod${nuevo.id}'>
                            <div>
                                <h2>Id: ${nuevo.id}</h2> 
                                <strong>Name: ${nuevo.username}</strong> <br>
                                <strong>Username: ${nuevo.email}</strong> <br>
                                <strong>Email: ${nuevo.email}</strong> <br>
                                <strong>Phone: ${nuevo.phone}</strong> <br>
                                <strong>Website: ${nuevo.website}</strong> <br>
                                <strong>Company Name: ${nuevo.copanyname}</strong> <br>
                                <strong>Street: ${nuevo.address.street}</strong> <br>
                                <strong>City: ${nuevo.address.city}</strong> <br>
                                <strong>Zicode: ${nuevo.address.zipcode}</strong> 
                            </div>
                            <div> <button type="submit" class="btn btn-success" id="btnedit" onclick="edit()">Edit</button> </div>
                        </div>
                    `;
                    list.appendChild(user);
    }

    this.addinfoAllusers=function(nuevo)
    {
        const list= document.getElementById("resultAll");
        const user= document.createElement("div");
        user.innerHTML=`
                        <div class ='estilo1' id='cod${nuevo.id}'>
                            <div>
                                <h2>Id: ${nuevo.id}</h2> 
                                <strong>Name: ${nuevo.username}</strong> <br>
                                <strong>Username: ${nuevo.email}</strong> <br>
                                <strong>Email: ${nuevo.email}</strong> <br>
                                <strong>Phone: ${nuevo.phone}</strong> <br>
                                <strong>Website: ${nuevo.website}</strong> <br>
                                <strong>Company Name: ${nuevo.copanyname}</strong> <br>
                                <strong>Street: ${nuevo.address.street}</strong> <br>
                                <strong>City: ${nuevo.address.city}</strong> <br>
                                <strong>Zicode: ${nuevo.address.zipcode}</strong> 
                            </div>
                        </div>
                    `;
                    list.appendChild(user);
    }

    this.showMessage=function(message)
    {
              let top=document.getElementById('top');
              let bottom=document.getElementById('bottom');
              
              let div=document.createElement('div');
              div.className="alerta";
              div.appendChild(document.createTextNode(message))
              
              top.insertBefore(div,bottom);
              
              setTimeout(function()
              {
                document.querySelector('.alerta').remove();
              },3000);
    }

    this.showMessagedelete=function(message)
    {
              let top=document.getElementById('top1');
              let bottom=document.getElementById('bottom1');
              
              let div=document.createElement('div');
              div.className="alerta";
              div.appendChild(document.createTextNode(message))
              
              top.insertBefore(div,bottom);
              
              setTimeout(function()
              {
                document.querySelector('.alerta').remove();
              },3000);
    }

    this.showMessagesearch=function(message)
    {
              let top=document.getElementById('top2');
              let bottom=document.getElementById('bottom2');
              
              let div=document.createElement('div');
              div.className="alerta";
              div.appendChild(document.createTextNode(message))
              
              top.insertBefore(div,bottom);
              
              setTimeout(function()
              {
                document.querySelector('.alerta').remove();
              },3000);
    }
    
}


let registration = new control();
let result = new showinformation();

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click',()=> {

    let id,name,username,email,phone,website,companyname,street,city,zipcode;
    id=document.getElementById("id").value;
    name=document.getElementById("name").value;
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    phone=document.getElementById("phone").value;
    website=document.getElementById("website").value;
    companyname=document.getElementById("companyname").value;
    street=document.getElementById("street").value;
    city=document.getElementById("city").value;
    zipcode=document.getElementById("zipcode").value;

    
    let user= new users(id,name,username,email,phone,website,companyname,street,city,zipcode);
    registration.adduser(user);
    result.showMessage("The user was registered",3);
   
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("username").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("website").value="";
    document.getElementById("companyname").value="";
    document.getElementById("street").value="";
    document.getElementById("city").value="";
    document.getElementById("zipcode").value="";
   

})

let btnSelect= document.getElementById("btnLoad");
btnSelect.addEventListener('click', ()=>{
    registration.FillSelect();
})

let btnDelete= document.getElementById("btnDelete");
btnDelete.addEventListener('click', ()=>{

    let id=document.getElementById("delete").value;
    registration.deleteuser(id);
    result.showMessagedelete("The user was delete",3);
})

let btnSearch= document.getElementById("btnSearch");
btnSearch.addEventListener('click', ()=>{

    let id=document.getElementById("search").value;
    registration.searchuser(id);
    result.showMessagesearch("The user was found",3);
   
})

let btnallusers= document.getElementById("btnallusers");
btnallusers.addEventListener('click', ()=>{
    registration.allusers();
})