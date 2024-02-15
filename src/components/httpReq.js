export async function getLeaderboard() {
  const res = await fetch("https://reactiontime.onrender.com/tests");
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to fetch leaderboard");
  return resData;
}

export async function postLeaderboard(name, time) {

    const res = await fetch("https://reactiontime.onrender.com/tests", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ "name":name , "time":time }),
    });
    const resData = await res.json();
    if (!res.ok) throw new Error("Failed to post leaderboard");
    return resData.msg;
}