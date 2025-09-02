import CodeChallengeForm from "../components/CodeChallengeForm";

export default function PersonalDetails() {
    return (
        <>
            <div className="text-center my-[40px] mx-[31px]">
                <h2 className="text-[22px] font-[500] font-bold">Personal Details</h2>
                <div className="mt-[48px]">
                    <CodeChallengeForm />
                </div>
            </div>
        </>
    );
}