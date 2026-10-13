export async function findUserByUsername(
  username: string
): Promise<{ id: string; passwordHash: string } | null> {
  throw new Error("not implemented yet");
}

export async function createSession(userId: string): Promise<string> {
  throw new Error("not implemented yet");
}

export async function getSession(
  token: string
): Promise<{ id: string; username: string } | null> {
  throw new Error("not implemented yet");
}

export async function deleteSession(token: string): Promise<void> {
  throw new Error("not implemented yet");
}

// TODO
// User account creation logic
