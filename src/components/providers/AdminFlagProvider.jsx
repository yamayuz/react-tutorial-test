import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    // ContextオブジェクトとしてisAdminとsetIsAdminを設定
    return (
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AdminFlagContext.Provider>
    );
};