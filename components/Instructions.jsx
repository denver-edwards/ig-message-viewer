import Link from "next/link";

export default function Instructions() {
  return (
    <section className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">
        Download Instagram Messages
      </h2>

      <p className="text-lg mb-4">
        To download Instagram messages from different platforms, follow these
        steps:
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-2">Web/Mobile</h3>
          <ol className="list-decimal pl-6">
            <li className="mb-2">
              Navigate to{" "}
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="accountscenter.instagram.com/info_and_permissions/dyi/"
              >
                accountscenter.instagram.com/info_and_permissions/dyi/
              </Link>{" "}
              in a web browser and sign in with your Instagram account.
            </li>
            <li className="mb-2">
              Click on <b>Download your information</b>.
            </li>
            <li className="mb-2">
              Click <b>Download or transfer information</b> then{" "}
              <b>Some of your information</b>.
            </li>
            <li className="mb-2">
              Select <b>Download or transfer information</b> then click{" "}
              <b>Some of your information</b>.
            </li>
            <li className="mb-2">
              Select <b>Messages</b> under <b>Your Instagram activity</b>.
            </li>
            <li className="mb-2">
              Click the
              <span className="text-blue-600 font-semibold"> blue</span> button
              that says <b>Next</b>.
            </li>
            <li className="mb-2">
              Make sure <b>Download to device</b> is selected and click the same
              <span className="text-blue-600 font-semibold"> blue</span> button
              that says <b>Next</b>.
            </li>
            <li className="mb-2">
              Choose your preferred <b>Date range</b>.
            </li>
            <li className="mb-2">
              <span className="text-red-500 font-medium">Make sure</span>{" "}
              <b>Format</b> is set to JSON before continuing.
            </li>
            <li className="mb-2">
              Click <b> Create files</b> and wait for the email from Instagram.
              <br />
              <span className="font-medium">
                Instagram usually takes up to 48 hours to provide your data. You
                will receive an email with a download link. Click it to start
                the download.
              </span>
            </li>
            <li className="mb-2">
              Download the file using the link provided in the email sent by
              Instagram.
            </li>
            <li className="mb-2">Extract the zip file.</li>
            <li className="mb-2">
              Scroll down on this page and click the <b>Upload JSON File </b>
              button.
            </li>
            <li className="mb-2">
              Navigate to the username of the conversation you want to view and
              select the appropriate message.json file in that folder.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
