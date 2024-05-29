/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name , _uid , _city , _branch   ) {
    const NFT={
        "name": _name,
        "uid" : _uid,
        "city": _city,
        "branch":_branch,
        
    };
    NFTs.push(NFT);
    


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("Name: " + NFTs[i].name);
        console.log("UID: " + NFTs[i].uid);
        console.log("City: " + NFTs[i].city);
        console.log("Branch: " + NFTs[i].branch);
        console.log("-------------------------");
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("GOLDY" , "22bCS16522" , "MUMBAI" , "CSE");
mintNFT("UMANG" , "22BCS16577" , "CHANDIGARH", "ARTIFICIAL INTELLIGENCE");
mintNFT("RICHA" , "22BCS16555" , "KOLKATA" , "MACHINE LEARNING");
mintNFT("BHARTI" , "22BCS16524", "HYDERABAD", "ROBOTICS");
listNFTs();
getTotalSupply();
