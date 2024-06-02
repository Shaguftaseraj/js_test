/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

 //create a variable to hold your NFT's
 const NFTsarray = [];
 // this function will take in some values as parameters, create an
 // NFT object using the parameters passed to it for its metadata, 
 // and store it in the variable above.
 function mintNFT(name,age,address,eyecolor,shirtType) {
   const NFTobject = {
     name: name,
     age:age,
     address: address,
     eyecolor: eyecolor,
     shirtType: shirtType,
   };
   NFTsarray.push(NFTobject);
   console.log("Person's name: " + name);
 }
 // create a "loop" that will go through an "array" of NFT's
 // and print their metadata with console.log()
 function listNFTs() {
   for (let i = 0; i < NFTsarray.length; i++) {
     console.log("\n\n_____________________ PERSON DETAILS  _________________________\n\n");
     console.log("\nNo. " + (i + 1));
     console.log("Name: " + NFTsarray[i].name);
     console.log("Age: " + NFTsarray[i].age);
    console.log("Address: "+NFTsarray[i].address);
     console.log("Eye color: " + NFTsarray[i].eyecolor);
     console.log("Shirt Type: " + NFTsarray[i].shirtType);
     console.log("\n\n_____________________* * * * *_________________________\n" );
   }
 }
 // print the total number of NFTs we have minted to the console
 function getTotalSupply() {
   console.log("\nTotal Supply =" + NFTsarray.length);
 }
 // call your functions below this line
 mintNFT("Shagufta", 19,"Delhi","Black", "Bodycon");
 mintNFT("Ehtesham",22,"MP", "Blue", "Hoodie");
 mintNFT("Shahnawaz",21,"UP", "Brown", "Cargo");
 mintNFT("Bella",22,"Kolkata","Dark Blue","Polo");
 mintNFT("Tanu",17,"Bangladesh","White","Full");
 listNFTs();
 getTotalSupply();
 
