	$(document).ready(function(){	
        
                //confirm("Is this working?");
                          
                $("#slide").click(function(){ //when you click a slide

					$(this).removeClass("current"); // 'this' slide is no longer 'current'
					
                    $(this).addClass("moveleft");
                    
					$(this).next().addClass('current'); //the slide after 'this' becomes current
                    
                    $(this).delay(400).queue(function(next){          
                        
                        $("#slider").append(this);
                        
                        $(this).removeClass("moveleft");
                        
                        next(); });                
                    
			     }); //end click
        
			        
                
                });