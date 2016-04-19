var currentIMG = document.createElement("IMG"); 
                            
                            var ref = new Firebase("https://burning-inferno-4114.firebaseio.com/");   
                            ref.on("child_added", function(snapshot) {
                                var changedPost = snapshot.val();
                                
                                if(changedPost.description==null || changedPost.description==""){
                                    document.getElementById("descOutput").innerHTML = "";
                                }
                                else{
                                    document.getElementById("descOutput").innerHTML = "<p>Description:</p> " + changedPost.description;   
                                }
                                
                                if(changedPost.status=="Open"){ 
                                    currentIMG.src = "img/openlogo.gif";
                                    document.getElementById("condition").innerHTML = "We are currently open!";
                                }
                                else if(changedPost.status=="Warning"){ 
                                    currentIMG.src = "img/warninglogo.gif";
                                    document.getElementById("condition").innerHTML = "We are currently on a warning!";
                                }
                                else if(changedPost.status=="Closed"){ 
                                    currentIMG.src = "img/closedlogo.gif";
                                    document.getElementById("condition").innerHTML = "We are currently closed!";
                                }
                                
                                if(changedPost.status== null){
                                    document.getElementById("UserMessage").innerHTML = "Current Status not avalable.";
                                    document.getElementById("descOutput").innerHTML = "";
                                }
                                else{       
                                    document.getElementById("StatusImage").appendChild(currentIMG);
                                }
                            });