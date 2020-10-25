declare module "notevil" {
  const safeEval: <T>(expr: string) => T;
  export default safeEval;
}
