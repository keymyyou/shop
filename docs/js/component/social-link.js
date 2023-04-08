class SocialLinkComponent extends Component{

    onClick(){
        try{
            fbq("track", "Contact");
            window.open(this.linkto, "_blank")
        } catch(e){
            console.log(e)
        }
    }

    template(){
        return `
        <a title="${this.linktitle}" onClick="document.querySelector('#${this.id}').onClick()">
            <i class="fa fa-${this.faicon}"></i>
        </a>
        `
    }
}

customElements.define("comp-social", SocialLinkComponent)

