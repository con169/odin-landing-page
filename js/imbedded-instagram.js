document.addEventListener('DOMContentLoaded', () => {
    const instagramEmbed = `
        <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Ca1CvUXAxHH/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
            <div style="padding:16px;"> 
                <a href="https://www.instagram.com/p/Ca1CvUXAxHH/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> 
                    View this post on Instagram
                </a>
            </div>
        </blockquote>
    `;

    // Select the element with class `instagram-embedded`
    const container = document.querySelector('.img.instagram-embedded');

    if (container) {
        // Inject the Instagram embed code into the selected container
        container.innerHTML = instagramEmbed;

        // Load Instagram's embed.js script to render the post
        const script = document.createElement('script');
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    } else {
        console.error('Instagram embed container not found!');
    }
});


const instagramEmbed2 = '
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Ca1CvUXAxHH/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
    <div style="padding:16px;"> 
        <a href="https://www.instagram.com/p/Ca1CvUXAxHH/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> 
            View this post on Instagram
        </a>
    </div>
</blockquote>

'