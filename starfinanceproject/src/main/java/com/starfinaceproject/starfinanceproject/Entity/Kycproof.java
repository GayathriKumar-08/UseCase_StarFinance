package com.starfinaceproject.starfinanceproject.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="kycproof")
public class Kycproof {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int pid;

    @Column(name="proof")
    private String proof;

    @Column(name="proofnumber",unique = true)
    private int txt;
    
    @Column(name="proofname")
    private String proofname;

    @OneToOne(fetch = FetchType.EAGER,
    cascade = CascadeType.ALL)
    @JoinColumn(name="emailcol",referencedColumnName = "id")
    private Register reg;

    public Kycproof() {
    }

    public Kycproof(int pid, String proof, int txt, String proofname, Register reg) {
        this.pid = pid;
        this.proof = proof;
        this.txt = txt;
        this.proofname = proofname;
        this.reg = reg;
    }


    public String getProof() {
        return proof;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public void setProof(String proof) {
        this.proof = proof;
    }

    public int getTxt() {
        return txt;
    }

    public Register getReg() {
        return reg;
    }



    public void setReg(Register reg) {
        this.reg = reg;
    }



    public void setTxt(int txt) {
        this.txt = txt;
    }

    public String getProofname() {
        return proofname;
    }

    public void setProofname(String proofname) {
        this.proofname = proofname;
    }



    @Override
    public String toString() {
        return "Kycproof [pid=" + pid + ", proof=" + proof + ", proofname=" + proofname + ", reg=" + reg + ", txt="
                + txt + "]";
    }

  
    

    
    
}
