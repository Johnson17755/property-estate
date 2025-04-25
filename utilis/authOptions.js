import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { prompt: "consent", access_type: "offline" } },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign-in and sign-out
    async signIn({ profile }) {
      // connecty to the Database
      await connectDB();
      // check if the user is already in the database
      const userExits = await User.findOne({ email: profile.email });
      // if not, create a new user
      if (!userExits) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
          name: profile.name,
        });
      }
      // if yes, return true to sign in
      return true;
    },
    // session callbacks function that modifies the session object
    async session({ session }) {
      // get the users from the database
      const user = await User.findOne({ email: session.user.email });
      // assign user id from the session
      session.user.id = user._id.toString(); // convert to string
      // return the session
      return session;
    },
  },
};
