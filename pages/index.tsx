import { GetServerSideProps } from 'next';
import httpAuthCheck from '../util/httpAuthCheck'


const index = () => {
  return <p>Hello world</p>
}
export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {req, res} = ctx

  httpAuthCheck(req, res)

  return {
    props: {}
  }
}
