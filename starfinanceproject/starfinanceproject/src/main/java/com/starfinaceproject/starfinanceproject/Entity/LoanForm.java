package com.starfinaceproject.starfinanceproject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name = "Loandata")
public class LoanForm {
    @Id
    @Column(name = "KN_number")
    private Long kn;

    @Column(name = "Branch_Name")
    private String branchname;
    @Column(name = "Applicant_Name")
    private String aname;
    @Column(name = "Residence_Address")
    private String raddress;
    @Column(name = "DOB")
    private String dt;
    @Column(name = "Gender")
    private String gender;
    @Column(name="Phone_number",unique = true)
    private Long pno;
    @Column(name="community")
    private String comm;
    @Column(name="nationality")
    private String nation;
    @Column(name="Education")
    private String edu;
    @Column(name="Occupation")
    private String occ;
    @Column(name="Martial_Status")
    private String mars;
    @Column(name="Required_Loan")
    private String rloan;
    @Column(name="Mode_Of_Disbursement")
    private String disburse;

    
    public LoanForm() {
    }


    public LoanForm(Long kn, String branchname, String aname, String raddress, String dt, String gender, Long pno,
            String comm, String nation, String edu, String occ, String mars, String rloan, String disburse) {
        this.kn = kn;
        this.branchname = branchname;
        this.aname = aname;
        this.raddress = raddress;
        this.dt = dt;
        this.gender = gender;
        this.pno = pno;
        this.comm = comm;
        this.nation = nation;
        this.edu = edu;
        this.occ = occ;
        this.mars = mars;
        this.rloan = rloan;
        this.disburse = disburse;
    }


    public Long getKn() {
        return kn;
    }


    public void setKn(Long kn) {
        this.kn = kn;
    }


    public String getBranchname() {
        return branchname;
    }


    public void setBranchname(String branchname) {
        this.branchname = branchname;
    }


    public String getAname() {
        return aname;
    }


    public void setAname(String aname) {
        this.aname = aname;
    }


    public String getRaddress() {
        return raddress;
    }


    public void setRaddress(String raddress) {
        this.raddress = raddress;
    }


    public String getDt() {
        return dt;
    }


    public void setDt(String dt) {
        this.dt = dt;
    }


    public String getGender() {
        return gender;
    }


    public void setGender(String gender) {
        this.gender = gender;
    }


    public Long getPno() {
        return pno;
    }


    public void setPno(Long pno) {
        this.pno = pno;
    }


    public String getComm() {
        return comm;
    }


    public void setComm(String comm) {
        this.comm = comm;
    }


    public String getNation() {
        return nation;
    }


    public void setNation(String nation) {
        this.nation = nation;
    }


    public String getEdu() {
        return edu;
    }


    public void setEdu(String edu) {
        this.edu = edu;
    }


    public String getOcc() {
        return occ;
    }


    public void setOcc(String occ) {
        this.occ = occ;
    }


    public String getMars() {
        return mars;
    }


    public void setMars(String mars) {
        this.mars = mars;
    }


    public String getRloan() {
        return rloan;
    }


    public void setRloan(String rloan) {
        this.rloan = rloan;
    }


    public String getDisburse() {
        return disburse;
    }


    public void setDisburse(String disburse) {
        this.disburse = disburse;
    }


    @Override
    public String toString() {
        return "LoanForm [aname=" + aname + ", branchname=" + branchname + ", comm=" + comm + ", disburse=" + disburse
                + ", dt=" + dt + ", edu=" + edu + ", gender=" + gender + ", kn=" + kn + ", mars=" + mars + ", nation="
                + nation + ", occ=" + occ + ", pno=" + pno + ", raddress=" + raddress + ", rloan=" + rloan + "]";
    }


   

}
