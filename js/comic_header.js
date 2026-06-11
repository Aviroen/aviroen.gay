//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="/img/header.png" alt="" /></a> 

        <div id="nav">
            <button class="button button3"><a href="index.html">HOME</a></button>
            <button class="button button3"><a href="https://ggmods.com/profile/QA733654/">GGMODS</a></button>
            <button class="button button3"><a href="https://www.nexusmods.com/profile/aviroen">NEXUSMODS</a></button>
            <button class="button button3"><a href="https://archiveofourown.org/users/Aviroen/pseuds/Aviroen.html">AO3</a></button>
            <button class="button button3"><a href="https://ko-fi.com/aviroen">KO-FI</a></button>
            <button class="button button3"><a href="https://bsky.app/profile/aviroen.bsky.social">BSKY</a></button>
            <button class="button button3"><a href="comic.html">COMIC</a></button>
            <button class="button button3"><a href="sdvmods.html">SDV MODS</a>
        </div>
    </header>
`;
