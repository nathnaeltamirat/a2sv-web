
import React, { useEffect, useState } from "react";
interface Props {
  id: string,
  authenticator:boolean
}
const Bookmark = ({ id ,authenticator}: Props) => {

  const [token,setToken] = useState<string|null>('')
  const [status, setStatus] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {

    setToken(localStorage.getItem("accessToken"));
  }, []);
  const handleSubmit = async () => {
    const add = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const remove = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `https://akil-backend.onrender.com/bookmarks/${id}`,
      status ? remove : add
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus(!status);
        } else {
          setErrorMessage(data.message);
        }
      });
  };
  useEffect(() => {
    const bookmarked = async () => {
      const ids = localStorage.getItem("eventIds");
      const parsedId = ids ? JSON.parse(ids) : [];
      if (parsedId.includes(id)) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };
    bookmarked();
  }, [id]);
  return (
    <>
      {authenticator && (
        <>
          {errorMessage && (
            <p className="text-center text-red-600">{errorMessage}</p>
          )}
          <button
            className="bg-red-400 p-2 my-2 rounded-2xl  bookmark"
            onClick={handleSubmit}
          >
            {status ?<img src='filled.svg' width="20px"/>
            :<img src = 'unfilled.svg' width="20px"/>}
          </button>
        </>
      )}
    </>
  );
};

export default Bookmark;
