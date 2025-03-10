const url=require("url")
function parseurl(givenUrl){
    const parse=url.parse(givenUrl);
    console.log(parse);
}
const url1="https://www.geeksforgeeks.org/how-to-send-email-using-node-js/";
parseurl(url1);