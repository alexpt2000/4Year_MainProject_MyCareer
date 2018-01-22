package com.mycareer.api.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "permissions")
public class Permissions {

	@Id
	private Long permissionID;
	private String permissionDescription;

	public Long getPermissionID() {
		return permissionID;
	}

	public void setPermissionID(Long permissionID) {
		this.permissionID = permissionID;
	}

	public String getPermissionDescription() {
		return permissionDescription;
	}

	public void setPermissionDescription(String permissionDescription) {
		this.permissionDescription = permissionDescription;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		// result = prime * result + ((permissionDescription == null) ? 0 :
		// permissionDescription.hashCode());
		result = prime * result + ((permissionID == null) ? 0 : permissionID.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Permissions other = (Permissions) obj;
		if (permissionID == null) {
			if (other.permissionID != null)
				return false;
		} else if (!permissionID.equals(other.permissionID))
			return false;
		return true;
	}

}
