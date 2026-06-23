//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="/img/header.png" alt="" /></a> 

        <div id="nav">
            <a href="index.html"><button class="button">HOME</button></a>
            <a href="https://ggmods.com/profile/QA733654/"><button class="button">GGMODS</button></a>
            <a href="https://www.nexusmods.com/profile/aviroen"><button class="button">NEXUSMODS</button></a>
            <a href="https://archiveofourown.org/users/Aviroen/pseuds/Aviroen.html"><button class="button">AO3</button></a>
            <a href="https://ko-fi.com/aviroen"><button class="button">KO-FI</button></a>
            <a href="https://www.patreon.com/cw/aviroen"><button class="button">PATREON</button></a>
            <a href="https://bsky.app/profile/aviroen.bsky.social"><button class="button">BSKY</button></a>
            <a href="comic.html"><button class="button">COMIC</button></a>
            <a href="sdvmods.html"><button class="button">SDV MODS</button></a>
            <a href="friends.html"><button class="button">FRIENDS</button></a>
        </div>
    </header>
`;
