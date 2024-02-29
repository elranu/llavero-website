
import logo from "../assets/llavero-logo-2.svg";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
        <img
            src={logo}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> 
        </div>

        <div className="space-y-4 lg:col-start-2">
          <h2 className="text-3xl md:text-4xl font-bold ">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Llavero {" "}
            </span>
            Wallet
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Llavero Wallet uses AWS KMS to secure your keys and secrets. Key Management Service (KMS) is like your Ledger / Trezor but on your personal AWS cloud stack.
          </p>

          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Lead security Companies as OpenZeppelin use AWS KMS to secure their keys and secrets for their blockchain customers.
            Now you can use this technology to secure your keys and secrets. 
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            On more step in decentralizing,  with Llavero you avoid SaaS companies or custodial wallets to secure your keys and secrets.
          </p>
      </div>
      </div>
    </section>
  );
};
