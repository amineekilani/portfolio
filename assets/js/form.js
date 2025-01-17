const formAlt=document.getElementById("contact-form");
formAlt.addEventListener("submit",async(event)=>
{
    event.preventDefault();
    const formData=new FormData(formAlt);
    try
    {
        const response=await fetch
        (
            "https://formspree.io/f/xjkkpgdd",
            {
                method: "POST",
                body: formData,
                headers:
                {
                    Accept: "application/json",
                },
            }
        );
        if(response.ok)
        {
            alert("Your message has been sent successfully!\nPlease wait patiently; you will receive a response soon.");
            formAlt.reset();
        }
        else
        {
            alert("Something went wrong. Please try again later.");
        }
    }
    catch(error)
    {
        alert("Error: Unable to send your message.");
    }
});