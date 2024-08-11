import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {
  //console.log(req);
});

export const config = {
  matcher: ["/", "/inbox"],
};
