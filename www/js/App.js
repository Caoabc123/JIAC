class App extends Base {

  mount() {
    this.navBarLinks = [
      { label: 'Välkommen', route: '/' },
      { label: 'Till salu', route: '/Till-salu' },
      { label: 'Kontakta oss', route: '/kontaktaoss' },
      { label: 'Sälj', route: '/salj' },
    ];
    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.aboutUsPage = new Tillsalu();
    this.missingPage = new MissingPage();
    this.kontaktaoss = new Kontaktaoss();
    this.salj = new Salj();
  }

  render() {
    return /*html*/`
      <div base-title="Minimal: ">
        <header>
          ${this.navBar}
        </header>
        <main class="container my-4">
          ${this.startPage}
          ${this.aboutUsPage}
          ${this.missingPage}
          ${this.kontaktaoss}
          ${this.salj}
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}