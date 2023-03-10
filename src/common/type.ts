import { Dayjs } from "dayjs";

export type SessionFlag = "Authenticated" | "Unauthenticated";

export type AuthType = "VerifyingToken" | "VerifyingCredential" | "SignOut" | "NotVerified"

export type UserCredential = {
  username: string,
  password: string
};

export type UserSession = {
  userName: string,
  fullName: string
  avatar: string,
}

export type ActionPayload<TValue> = {
  type: string,
  payload: TValue
};

// {Sale Type}

export type SaleFlag = 0 | 1 | 2

export type SaleItem = {
  id: number,
  startDate: Date,
  endDate: Date,
  value: number,
  status: SaleFlag,
  updateAt: Date
}

export type SalePayload = {
  id?: number,
  startDate: Dayjs,
  endDate: Dayjs,
  value: number,
  products: Array<string>
}

// {end sale type}

export type FormModal<SubmitData, ResponseData> = {
  title: string
  visible: boolean
  changeVisible: (flag: boolean) => void
  onSubmit?: (payload: SubmitData) => Promise<ResponseData>
}

export type SaleModal = FormModal<SalePayload, SaleItem>