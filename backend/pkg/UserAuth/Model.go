package userauth

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Access struct {
	Name string             `bson:"name,omitempty" json:"name,omitempty"`
	ID   primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
}

type UserAccess struct {
	Name   string   `bson:"name,omitempty" json:"name,omitempty"`
	ID     primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Access []Access `bson:"access,omitempty" json:"access,omitempty"`
}

type Shop struct {
	Name string             `bson:"name,omitempty" json:"name,omitempty"`
	ID   primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
}

type Address struct {
	Pincode  int32  `bson:"pincode,omitempty" json:"pincode,omitempty"`
	State    string `bson:"state,omitempty" json:"state,omitempty"`
	District string `bson:"district,omitempty" json:"district,omitempty"`
	Country  string `bson:"country,omitempty" json:"country,omitempty"`
	Address  string `bson:"address,omitempty" json:"address,omitempty"`
}

type User struct {
	ID                     primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Name                   string             `bson:"Name,omitempty" json:"name,omitempty"`
	Img                    string             `bson:"Img,omitempty" json:"img,omitempty"`
	Password               string             `bson:"Password,omitempty" json:"password,omitempty"`
	ContactNumber          string             `bson:"ContactNumber,omitempty" json:"contactNumber,omitempty"`
	AlternateContactNumber string             `bson:"AlternateContactNumber,omitempty" json:"alternateContactNumber,omitempty"`
	Level                  int16              `bson:"Level,omitempty" json:"level,omitempty"`
	IsVerified             bool               `bson:"IsVerified,omitempty" json:"isVerified,omitempty"`
	EmailID                string             `bson:"EmailID,omitempty" json:"emailID,omitempty"`
	AlternateEmailID       string             `bson:"AlternateEmailID,omitempty" json:"alternateEmailID,omitempty"`
	Access                 []Access           `bson:"Access,omitempty" json:"access,omitempty"`
	IsAdmin                bool               `bson:"IsAdmin,omitempty" json:"isAdmin,omitempty"`
	AssociatedWithShop     []Shop             `bson:"AssociatedWithShop,omitempty" json:"associatedWithShop,omitempty"`
	IsDisabled             bool               `bson:"isDisabled,omitempty" json:"isDisabled,omitempty"`
	Address                Address            `bson:"Address,omitempty" json:"address,omitempty"`
	AdharCardNumber        string             `bson:"AdharCardNumber,omitempty" json:"adharCardNumber,omitempty"`
	PanCardNumber          string             `bson:"PanCardNumber,omitempty" json:"panCardNumber,omitempty"`
	DrivingLicenseNumber   string             `bson:"DrivingLicenseNumber,omitempty" json:"drivingLicenseNumber,omitempty"`
	VoterID                string             `bson:"VoterID,omitempty" json:"voterID,omitempty"`
}
