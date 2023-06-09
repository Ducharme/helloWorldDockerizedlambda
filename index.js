

exports.handler = async function(event, context) {
  try {
    console.log("Hello, World!");
    return {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda!")
    };
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify("Internal Server Error")
    };
  }
}

/*exports.handler = function(event, context, callback) {
  console.log("Hello, World!");
  //callback(null, "Function execution completed.");
  //return { statusCode: 200, body: "Hello, World!" };
  //return 0;
}*/
