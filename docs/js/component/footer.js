class FooterComponent extends Component{

    onConnected(){
        NOWA.init().then(()=>{
            this.render();
        })
    }

    template(){
        if(!NOWA.data)
            return `<div></div>`
        return `
    <footer id="footer" class="mt-auto">
        <p class="copyright">Made with 
            <i class="fa fa-heart"></i> By IT Team ©
            <span id="currentYear">2023</span> All Rights Reserved.
        </p>
        <div class="social">
            <comp-social id="facbook-social", linkto="https://www.facebook.com/profile.php?id=100091282099489" linktitle="facebook", faicon="facebook"></comp-social>
            <comp-social id="gmail-social", linkto="mailto:Fedayeenalvis@gmail.com" linktitle="gmail", faicon="envelope"></comp-social>
            <comp-social id="github-social", linkto="https://github.com/keymyyou/shop" linktitle="github", faicon="github"></comp-social>
            <comp-social id="wa-social", linkto="https://api.whatsapp.com/send?phone=${NOWA.data[0]}" linktitle="whatsapp" faicon="whatsapp"></comp-social>
        </div>
    </footer>`
    }
}

customElements.define('comp-footer', FooterComponent);