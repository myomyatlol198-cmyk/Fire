import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export interface UserNrc {
    nrc_front: string;
    nrc_back: string;
}

export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string;
    phoneNumber: string | null;
    role: string;
    createdAt: any;
    pushToken?: string;
    nrc?: UserNrc;
}

export const userService = {
    getUserProfile: async (uid: string): Promise<UserProfile | null> => {
        try {
            const userRef = doc(db, "users", uid);
            const docSnap = await getDoc(userRef);

            if (docSnap.exists()) {
                return { uid: docSnap.id, ...docSnap.data() } as UserProfile;
            }

            return null;
        } catch (error) {
            console.error(`Error fetching profile for user ${uid}:`, error);
            throw error;
        }
    },
    updateUserProfile: async (uid: string, profileData: Partial<UserProfile>): Promise<void> => {
        try {
            const userRef = doc(db, "users", uid);
            await setDoc(userRef, profileData, { merge: true });
        } catch (error) {
            console.error(`Error updating profile for user ${uid}:`, error);
            throw error;
        }
    }
};