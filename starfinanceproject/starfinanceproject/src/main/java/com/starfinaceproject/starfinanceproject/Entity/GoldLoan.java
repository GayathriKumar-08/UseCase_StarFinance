package com.starfinaceproject.starfinanceproject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class GoldLoan extends LoanForm {
    @Column(name="Account_holder_name")
    private String accname;    
    @Column(name="Account_number",unique = true)
    private int accno;
    @Column(name="IFSC")
    private String ifsc;
    @Column(name="Annual_income")
    private int aincome;
    @Column(name="Purpose_of_loan")
    private String pol;
    
    public String getAccname() {
        return accname;
    }
    public void setAccname(String accname) {
        this.accname = accname;
    }
    public int getAccno() {
        return accno;
    }
    public void setAccno(int accno) {
        this.accno = accno;
    }
    public String getIfsc() {
        return ifsc;
    }
    public void setIfsc(String ifsc) {
        this.ifsc = ifsc;
    }
    public int getAincome() {
        return aincome;
    }
    public void setAincome(int aincome) {
        this.aincome = aincome;
    }
    public String getPol() {
        return pol;
    }
    public void setPol(String pol) {
        this.pol = pol;
    }
    public GoldLoan() {
    }
    public GoldLoan(Long kn, String branchname, String aname, String raddress, String dt, String gender, Long pno,
            String comm, String nation, String edu, String occ, String mars, String rloan, String disburse,
            String accname, int accno, String ifsc, int aincome, String pol) {
        super(kn, branchname, aname, raddress, dt, gender, pno, comm, nation, edu, occ, mars, rloan, disburse);
        this.accname = accname;
        this.accno = accno;
        this.ifsc = ifsc;
        this.aincome = aincome;
        this.pol = pol;
    }
    @Override
    public String toString() {
        return "GoldLoan [accname=" + accname + ", accno=" + accno + ", aincome=" + aincome + ", ifsc=" + ifsc
                + ", pol=" + pol + "]";
    }
    
    
    
  
}
