import challengePdf from "../assets/Coding_Challenge_Pokedex_Lite.pdf";

export default function CodingChallengeTask() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = challengePdf;
        link.download = 'Coding_Challenge_Pokedex_Lite.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="my-[40px] mx-[20px]">
                <h2 className="text-[32px] font-[500] font-bold text-center">Pokedex Lite</h2>
                <div className="mt-[48px]">
                    <h2 className="text-[26px] font-[400]">Goal</h2>
                    <p className="mt-[12px] text-[16px] text-left">Create a simple program or small app that allows a user to look up information for any pokemon using <a className="underline text-[#0E5371]" href="https://pokeapi.co/" target="_blank">PokeAPI</a>. You are free to use any language/framework. Visual representation/GUI would give you bonus points.</p>
                </div>
                <div className="mt-[48px]">
                    <h2 className="text-[26px] font-[400]">Requirements</h2>
                    <ol className="mt-[12px] text-[16px] text-left list-decimal list-inside space-y-[12px]">
                        <li>Fetch Pokemon data from the API</li>
                        <li>Input: The user enters a name or ID number</li>
                        <li>Output:</li>
                        <ul className="list-disc list-inside space-y-[12px] pl-[24px]">
                            <li>Name</li>
                            <li>ID number</li>
                            <li>Height - in meters</li>
                            <li>Weight - in kg</li>
                            <li>Type (Fire, Water, Grass, etc.)</li>
                            <li>Base Stats (HP, Attack, Defense, etc.)</li>
                            <li>Image (if language/framework supports it) - Use front_default sprite</li>
                        </ul>
                        <li>Handle invalid input - show according error text in case a request fails</li>
                    </ol>
                </div>
                <div className="mt-[48px] text-left">
                    <h2 className="text-[26px] font-[400]">Example output<br />(console version)</h2>
                    <div>
                        <p>1. Valid name</p>
                        <code className="text-[#056800]">
                            Welcome to Pokedex Lite! <br />
                            Enter a Pokemon name or ID: pikachu <br />
                            <br />
                            Name: Pikachu <br />
                            ID: 25 <br />
                            Height: 0.4 m <br />
                            Weight: 6.0 kg <br />
                            Types: Electric <br />
                            Stats: <br />
                            HP: 35 <br />
                            Attack: 55 <br />
                            Defense: 40 <br />
                            Speed: 90 <br />
                        </code>
                    </div>
                    <div className="mt-[24px]">
                        <p>2. Invalid name</p>
                        <code className="text-[#056800]">
                            Welcome to Pokedex Lite! <br />
                            Enter a Pokemon name or ID: something <br />
                            <br />
                            Pokemon not found. Try another name or ID.
                        </code>
                    </div>
                </div>

                <div className="mt-[48px] text-center flex items-center justify-center flex-col space-y-[12px]" onClick={handleDownload} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDownload(); } }}>
                    <h2 className="text-[26px] font-[400]">Download the Challenge Task</h2>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_27_36)">
                            <path d="M41.1667 19.5H32.5V6.5H19.5V19.5H10.8334L26 34.6667L41.1667 19.5ZM10.8334 39V43.3333H41.1667V39H10.8334Z" fill="#323232" />
                        </g>
                        <defs>
                            <clipPath id="clip0_27_36">
                                <rect width="52" height="52" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="mt-[48px] text-center">
                    <p className="text-[26px] font-[600] font-bold">Send your solution to our <br/> email: info@diadraw.com</p>
                </div>
            </div>
        </>
    );
}