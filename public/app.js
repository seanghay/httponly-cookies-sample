const msg = document.getElementById("message");
const signIn = document.getElementById("sign-in");
const signOut = document.getElementById("sign-out");

signIn.disabled = true
signOut.disabled = true;

async function refreshUserId() {
  const response = await fetch("/id");
  const { userId } = await response.json();
  msg.innerText = `User ID: ${userId || "N/A"}`;
  log('refresh user id', { userId });
  signIn.disabled = !!userId
  signOut.disabled = !userId;
}

async function main() {

  await refreshUserId();

  signIn.addEventListener("click", async () => {
    const response = await fetch("/sign-in");
    const signInData = await response.json();
    log('sign-in', signInData);
    await refreshUserId();
  });

  signOut.addEventListener("click", async () => {
    const response = await fetch("/sign-out");
    const signOutData = await response.json();
    log("sign-out", signOutData);
    await refreshUserId();
  });
}

main();

const el = document.getElementById("print");

function log(context, data) {
  el.innerText = `[${context}, ${new Date().toISOString()}] response \n` + JSON.stringify(data, null, 3) + '\n' + el.innerText;
}