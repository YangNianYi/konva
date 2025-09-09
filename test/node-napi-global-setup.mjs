export async function mochaGlobalSetup() {
  await import('../src/napi-backend.ts');
}
